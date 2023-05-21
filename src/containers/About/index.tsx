import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { GithubSection } from './styles';

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorum
      unde sunt architecto, placeat itaque praesentium? Exercitationem aliquam
      eius repellat ipsa illum ad aliquid delectus impedit, incidunt, tenetur
      distinctio accusantium.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=freitas-paola&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=freitas-paola&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
);

export default About;
