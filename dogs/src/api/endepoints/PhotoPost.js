import React from 'react'
import URL from './URL';

const PhotoPost = () => {
    const [token, setToken] = React.useState(' ')
    const [nome, setNome] = React.useState(' ')
    const [peso, setPeso] = React.useState(' ')
    const [idade, setIdade] = React.useState(' ')
    const [img, setImg] = React.useState(' ')
    
 
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('img', img)
        formData.append('nome', nome)
        formData.append('peso', peso)
        formData.append('idade', idade)


        fetch(`${URL}/api/photo`, {
            method: 'POST',
            headers: {
              Authorization: 'Bearer ' + token 
            },
            body: formData
          })
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((json) => {
              console.log(json);
              return json;
            });
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={token} placeholder="Token" onChange={({target}) => setToken(target.value)}  />
      <input type="text" value={nome} placeholder="nome" onChange={({target}) => setNome(target.value)}  />
      <input type="text" value={peso} placeholder="peso" onChange={({target}) => setPeso(target.value)}  />
      <input type="text" value={idade} placeholder="idade" onChange={({target}) => setIdade(target.value)}  />
      <input type="file" onChange={({target}) => setImg(target.files[0])}  />
      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost
