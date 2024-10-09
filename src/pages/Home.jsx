import { Slider } from '../components/Slider';
import './css/home.css'
export function Home() {
  return (
    <div className="homeContainer">
      <h1>Benvenuto nel nostro E-commerce Store</h1>
      <h2>Elettronica</h2>
      <Slider category="electronics" />
      <h2>Gioielleria</h2>
      <Slider category="jewelery" />
      <h2>Moda Uomo</h2>
      <Slider category="men's clothing" />
      <h2>Moda Donna</h2>
      <Slider category="women's clothing" />
    </div>
  );
}