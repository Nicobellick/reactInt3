import React, {useState} from 'react'


const Form = () => {
    const [movie, setMovie] = useState('')
    const [url, setUrl] = useState('')
    const [comment, setComment] = useState('')
    

    const submitForm = (e) => {
        e.preventDefault();
        const api = 'https://post-a-form.herokuapp.com/api/movies'
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({title :movie, poster: url, comment: comment})
          };
          fetch(api, config)
          .then((res) => res.json())
          .then((res) => {
              if(res.error){
                  alert(res.error)
              } else {
                  alert('You stupid movie has been add dude')
              }
          })
          .catch((e) => {
            console.error(e);
            alert("There was an error when adding movie.");
          });
    }

    return(
        <div className="Form">
        <h1>New Movie</h1>

        <form onSubmit={submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="movie">Movie</label>
              <input
                type="text"
                id="movie"
                name="movie"
                onChange={(e) => setMovie(e.target.value)}
                value={movie}
              />
            </div>

            <div className="form-data">
              <label htmlFor="url">Url</label>
              <input
                type="text"
                id="url"
                name="url"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Any comment ?</label>
              <textarea type='text' id='comment' name='comment' onChange={(e) => setComment(e.target.value)} value={comment}>

              </textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    )
}

export default Form