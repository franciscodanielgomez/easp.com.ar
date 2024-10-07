// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Escuela Argentina de Salud Perinatal',
		text: ' '
	},
	navItems: [

		{ name: 'Inicio', link: '/' },
		{ name: 'Nosotros', link: '/about' },
		{
			name: 'Formaciones',
			link: '#',
			submenu: [
				{ name: 'Formación en Salud Perinatal', link: '/formacion-fsp' },
				{ name: 'Formación de Doulas', link: '/formacion-fd' },
				{ name: 'Formación en Lactancia Humana', link: '/formacion-flh' },
			]
		},
		{ name: 'Aula', link: 'https://aulavirtual.easp.com.ar' },
		{ name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: 'Quiero asesorarme', link: '/about', style: 'primary', size: 'lg' }]
}
