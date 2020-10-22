import Head from 'next/head'

export default function Home() {
  return (
	  <>
		<Head>
			<title>jdawber.co.uk</title>
			<meta name="description" content="Jonathan Dawber's personal website" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
			<meta name="google-site-verification" content="c4Xf-Mdm2ka3EEruESb1i7n39zzbG-R1tlXWzWzXB7c" />
			<link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
			<link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" as="style" type="text/css"/>
		</Head>
		<main>
			<h1>Jonathan Dawber</h1>
			<p>I live in Manchester.</p>
			<p>I'm married, have one son and have two cats.</p>
			<p>I write code for <a href="https://www.weaveability.com">Weaveability</a>.</p>
			<p>I write <a href="https://github.com/jdawber">code</a> in my spare time too.</p>
			<p>I support Manchester United.</p>
			<p>I like cars.</p>
			<p>I will be adding more stuff to my site, eventually.</p>
		</main>
	</>
  )
}