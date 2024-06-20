document.querySelector('.link__button').addEventListener('click', () => {
	document.querySelector('.link__button svg').classList.toggle('rotate')
})

function getScrollbarWidth() {
	return window.innerWidth - document.documentElement.clientWidth
}

document.documentElement.style.setProperty(
	'--scrollbar-width',
	`${getScrollbarWidth()}px`
)

const elementsBefore = document.querySelector('*::before')

for (const element in elementsBefore) {
	element.style.width = `calc(100vw - var(--scrollbar-width))`
}
