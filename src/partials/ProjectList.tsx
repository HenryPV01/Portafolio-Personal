import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>PROYECTOS</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="MENÚ DE VIDEOJUEGOS"
        description="Un proyecto que simula un menú interactivo de videojuegos en una página web local. Permite navegar entre diferentes opciones y ver información relacionada con los juegos.

Tecnologías: HTML, CSS, JavaScript."
        link="/"
        img={{
          src: '/assets/images/games.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>JAVASCRIPT</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
          </>
        }
      />
      <Project
        name="CONTROL DE INVENTARIO - PROXIMAMENTE"
        description="Un sistema de gestión de inventarios desarrollado en Visual Basic. Permite agregar, eliminar y actualizar productos en un inventario, así como consultar stock disponible.

Tecnologías: Visual Basic, bases de datos (MySQL)."
        link="/"
        img={{ src: '/assets/images/inv.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>VB.NET</Tags>
          </>
        }
      />
      <Project
        name="CALCULADORA"
        description="Una calculadora funcional creada en PHP, donde los usuarios pueden realizar operaciones matemáticas básicas (suma, resta, multiplicación, división).

Tecnologías: PHP, HTML, CSS."
        link="/"
        img={{ src: '/assets/images/CALC.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>PHP</Tags>
            <Tags color={ColorTags.INDIGO}>HTML</Tags>
            <Tags color={ColorTags.ROSE}>CSS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
