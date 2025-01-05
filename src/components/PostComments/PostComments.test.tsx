import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve cadastrar dois comentarios', () => {
            const {debug} = render(<PostComment/>);
            fireEvent.change(screen.getByTestId('add-comentario'), {
                target: { value: 'Legal' }
            })
            fireEvent.click(screen.getByTestId('btn-cadastrar'))
            expect(screen.getByText('Legal')).toBeInTheDocument()

            fireEvent.change(screen.getByTestId('add-comentario'), {
                target: { value: 'Bonitinho'}
            })
            fireEvent.click(screen.getByTestId('btn-cadastrar'))
            expect(screen.getByText('Bonitinho')).toBeInTheDocument()

        })
});