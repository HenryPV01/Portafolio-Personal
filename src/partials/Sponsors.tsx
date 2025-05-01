import { Section } from 'astro-boilerplate-components';

const Sponsors = () => (
  <Section title="Sponsors">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.google.com/?hl=es" target="_blank">
              <img
                src="./assets/images/google.avif"
                alt="Google"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.twitch.tv/" target="_blank">
              <img
                src="./assets/images/twitch.jpg"
                alt="twitch"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.youtube.com/" target="_blank">
              <img
                src="./assets/images/ytt.png"
                alt="youtube"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
