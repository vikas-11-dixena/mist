import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Banner from './components/banner/Banner';
import About from './pages/About/About.js';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Routes>
					<Route element={<Home />}>
						<Route path='/' element={<Banner />} />
						<Route path='/about' element={<About />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
