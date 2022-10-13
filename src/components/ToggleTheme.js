import { ThemeConsumer } from '../context/ThemeContext';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme} className="lo">{theme === 'light' ? <BsFillMoonStarsFill /> : <BsSunFill />}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ToggleTheme;
