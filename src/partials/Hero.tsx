import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          HOLA! <GradientText>BIENVENIDO/A</GradientText> 👋
        </>
      }
      description={
        <>
          Soy{' '}
          <GradientText>
            <b>Henry Ponce </b>
          </GradientText>
          , estudiante de Desarrollo de Software en Ecuador. Me apasiona la
          programación, especialmente el desarrollo web y la creación de
          videojuegos. Desde joven, descubrí mi vocación por el código, y hoy
          sigo perfeccionando mis habilidades con el objetivo de ingresar a una
          empresa de renombre o crear mi propio sistema innovador. Mi motivación
          está en transformar ideas en soluciones funcionales que marquen la
          diferencia.
          <br />
        </>
      }
      avatar={
        <img
          className="w-66 h-80"
          src="/assets/images/ess.avif"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* Elimina o comenta estas líneas para quitar los iconos */}
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
