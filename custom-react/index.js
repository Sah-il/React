const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click here to visit google.com'
}

const root = document.getElementById('root')

customRender(reactElement,root)

function customRender(reactElement,container){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children

  // domElement.setAttribute('href',reactElement.props.href)
  // domElement.setAttribute('target',reactElement.props.target)
  // container.appendChild(domElement)

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  root.appendChild(domElement)

}