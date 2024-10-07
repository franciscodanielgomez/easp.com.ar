// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'EASPAC. Escuela Argentina de Salud Perinatal',
	siteDescription:
		'Somos profesionales de la salud que trabajamos para promover embarazos saludables, partos respetados, puerperios seguros y el cuidado de la salud del bebé en sus 3 primeros años de vida.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'EASP. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
