// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'EASPAC',
		aboutText:
			'Somos profesionales de la salud que trabajamos para promover embarazos saludables, partos respetados, puerperios seguros y el cuidado de la salud del bebé en sus 3 primeros años de vida.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Foxi.'
		}
	},
	footerColumns: [
		{
			category: 'Asociación Civil',
			subCategories: [
				{
					subCategory: 'Inicio',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Nosotros',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Formaciones',
			subCategories: [
				{
					subCategory: 'Formación en Salud Perinatal',
					subCategoryLink: '/formacion-fsp'
				},
				{
					subCategory: 'Formación de Doulas',
					subCategoryLink: '/formacion-fd'
				},
				{
					subCategory: 'Formación en Lactancia Humana',
					subCategoryLink: '/formacion-flh'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Preguntas Frecuentes',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Políticas de Privacidad',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Términos y Condiciones',
					subCategoryLink: '/terms'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© Escuela Argentina de Salud Perinatal Asociación Civil 2024.'
	}
}
