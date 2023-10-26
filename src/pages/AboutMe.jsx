import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
    <div className="about">
      <p>
        Hello, I’m Pete Richards, proudly navigating through the transformative learning journey at the University of Denver’s Coding Boot Camp.
      </p>
      <p>
        This pivotal chapter of my life began in May 2023, when I decided to shift gears from my career in sales, eager to pursue my long-standing dream of delving into Software Development. My journey since then has been nothing short of exhilarating; I’ve conquered the challenges of Harvard’s CS50 course on edX.org, eagerly enrolled in this intensive boot camp, and proactively engaged with The Odin Project as a warm-up to my formal classes.
      </p>
      <p>
        This industry has intrigued me for years, beckoning with its promise of innovation and problem-solving. However, it’s in these past several months of immersive learning and hands-on experience that my passion has truly taken form. Every line of code, every collaborative project, and every hurdle overcome has only deepened my love for this field.
      </p>
      <p>
        I find myself captivated by the creative process of coding, the synergy found in collaboration, the thrill of research, and the satisfaction derived from solving complex problems. Whether it’s Software or Web Development that the future holds for me, I am certain of one thing: I have found my true calling.
      </p>
    </div>
    <h2>About Me</h2>
    </>
  );
}
