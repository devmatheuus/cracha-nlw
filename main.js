const links = {
  github: 'Devmattz',
  youtube: 'UCGlnvq_5L7NyLRwOlJGzHyQGlnvq_5L7NyLRwOlJGzHyQ',
  face: 'MatheusPlosrsky',
  instagram: 'mathee3eus_',
  twitter: 'maykbrito'
}

//o .children pega os elementos filhos de um determinado id
function ChangeSocialMedia() {
  //o for esta sendo executado a respeito dos filhos do identificador "socialLinks" (ul), os filhos do ul são as li
  for (let li of socialLinks.children) {
    //o comando abaixo esta dizendo o seguinte: pegue todos os atributos "class" das minhas li
    const social = li.getAttribute('class')

    //o comando abaixo esta falando o seguinte: vai la no li, pega o filho na posição 0, pega o href dele e passe o novo valor que ira substituir o href.

    //o uso da crase é o chamado "template string", serve para mostrar que no meio do nosso texto tem uma variável que é identificada por ${nome da var}, e é para ele pegar essa variavel e substituir pelo valor que esta guardado na variavel.
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

ChangeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      bio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      GitName.textContent = data.login
    })
}
getGitHubProfileInfos()
