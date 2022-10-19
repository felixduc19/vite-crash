import { reactLogo } from '@/assets';
import { Login } from '@/components';
import { messaging } from '@/config';
import { useToken } from 'react-firebase-hooks/messaging';
import './App.css';

function App() {
	const [token, loading, error] = useToken(
		messaging,
		'BFWW-8WO77nO2ZdaLuKGZeO_uU8AnL0dThU17nZ64nkPs2abvwNXsYMWH89RcjfjjFK1_VTCPVqW5JxhNYpFEgQ'
	);

	console.log(token, loading, error);
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text">Vite + React</h1>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<h1 className="text-2xl font-bold underline">Hello world!</h1>
			<Login />
			<div>
				<p>
					{error != null && <strong>Error: {JSON.stringify(error)}</strong>}
					{loading && <span>Loading token...</span>}
					{token && <span>Token:{token}</span>}
				</p>
			</div>
			<divs>hello world</divs>
		</div>
	);
}

export default App;
