import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { createInspection } from '../../service/api/endpoints';
import type { StoredData } from '../../types/core';
import updateLocalStorage from '../../utils/updateLocalStorage';

import Button from '../Button';
import TextField from '../TextField';
import Banner from '../Banner';

import { Container, Title, FormWrapper } from './styles';

type BannerConfig = {
  type: 'error' | 'success';
  message: string;
};

const CreateInspectionForm = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [bannerConfig, setBannerConfig] = useState<BannerConfig>({
    type: 'success',
    message: 'Success!',
  });
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [lastKeywords, setLastKeywords] = useState<StoredData[]>([]);

  const { mutate, isLoading } = useSWR('/crawl');

  useEffect(() => {
    const storedKeywords = window.localStorage.getItem('lastKeywords');
    if (storedKeywords) {
      setLastKeywords(JSON.parse(storedKeywords));
    }
  }, []);

  useEffect(() => {
    if (!lastKeywords.length) return;
    updateLocalStorage('lastKeywords', JSON.stringify(lastKeywords));
  }, [lastKeywords]);

  const handleMessage = ({
    type,
    message,
  }: {
    type: 'error' | 'success';
    message: string;
  }) => {
    setShowBanner(true);
    setBannerConfig({
      type,
      message,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await createInspection(keyword);
      setKeyword('');
      setLastKeywords((prevKeywords) => [
        ...prevKeywords,
        { id: data.id, keyword },
      ]);
      mutate();
      handleMessage({
        type: 'success',
        message: 'Cadastro de uma solicitação de inspeção realizada com sucesso!',
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleMessage({
          type: 'error',
          message: `Internal error: ${error.response?.data.message}`,
        });
      }
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Cadastro de uma solicitação de inspeção</Title>
      {showBanner ? (
        <Banner
          type={bannerConfig.type}
          message={bannerConfig.message}
          onClose={() => setShowBanner(false)}
        />
      ) : null}
      <FormWrapper onSubmit={handleSubmit}>
        <TextField
          label="Solicitação de inspeção"
          placeholder='Palavra-chave'
          name="register"
          value={keyword}
          onChange={setKeyword}
        />
        <Button
          type="submit"
          text="Enviar"
          disabled={keyword.length === 0}
          loading={isLoading}
        />
      </FormWrapper>
    </Container>
  );
};

export default CreateInspectionForm;
