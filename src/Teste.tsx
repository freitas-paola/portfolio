import styled from 'styled-components';

type BotaoProps = {
  principal: boolean;
  fontSize?: string;
};

const Button = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

const ButtonDanger = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`;

function Teste() {
  return (
    <>
      <Button fontSize="18px" principal={false}>
        Cancelar
      </Button>
      <Button principal>Clique Aqui</Button>
      <ButtonDanger as="a" principal={false}>
        <span>Não clique aqui</span>
      </ButtonDanger>
    </>
  );
}

export default Teste;
