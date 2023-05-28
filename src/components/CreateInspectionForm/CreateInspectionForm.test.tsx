import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CreateInspectionForm from './CreateInspectionForm';

describe('CreateInspectionForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render form correctly', () => {
    const { asFragment } = render(<CreateInspectionForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should submit the form and display success message', async () => {
    render(<CreateInspectionForm />);

    const keywordInput = screen.getByRole('textbox');
    fireEvent.change(keywordInput, { target: { value: 'Keyword' } });

    const submitButton = screen.getByText('Enviar');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          'Cadastro de uma solicitação de inspeção realizada com sucesso!'
        )
      ).toBeInTheDocument();
    });
  });
});
