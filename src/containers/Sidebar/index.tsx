import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';

import { Description, ButtonTheme, SidebarContainer } from './styles';

type Props = {
  changeTheme: () => void;
};

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Paola Freitas</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        freitas-paola
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Frontend Developer
      </Description>
      <ButtonTheme onClick={props.changeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
