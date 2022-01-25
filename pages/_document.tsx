import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head>

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
					<meta name='description' content='online resume' />
					<meta name={'keyword'} content={'React.js Node.js Angular'} />
				</Head>
				<body className={'bg-gradient-to-r from-amber-100 to-amber-500 dark:from-dark-500 dark:to-dark-700 dark:text-white'}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
