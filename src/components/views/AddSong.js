import React, { Component } from 'react'
import { addSongMutation, getSongsQuery} from '../../queries/queries'
import { graphql, compose, withApollo } from 'react-apollo'

class AddSong extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        
        const data = new FormData(e.target);
        let singerIdArray = []
        data.get('singerId').split(",").forEach( id => singerIdArray.push(id.trim()))

        this.props.addSongMutation({
          variables:{
            name: data.get('name'),
            year: data.get('year'),
            composer: data.get('composer'),
            singerId: singerIdArray,
            lyrics: data.get('lyrics'),
            verse: `${data.get('verse')}`,
            link: data.get('link')
          },
          refetchQueries: [{query: getSongsQuery}]
        }).then()
        .catch(err=> console.log(err))
    }
    render(){
        return(
            <form id="add-song" onSubmit={this.handleSubmit}>
                <h1>Add Song</h1>
                <div>
                    <label>Song Name</label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <label>Year</label>
                    <input type="text" name="year"/>
                </div>
                <div>
                    <label>Composer</label>
                    <input type="text" name="composer"/>
                </div>
                <div>
                    <label>Singer Id</label>
                    <textarea type="text" name="singerId"/>
                </div>
                <div>
                    <label>Lyrics</label>
                    <input type="text" name="lyrics"/>
                </div>
                <div>
                    <label>Verse</label>
                    <textarea type="text" name="verse"/>
                </div>
                <div>
                    <label>Link</label>
                    <input type="text" name="link"/>
                </div>
                <button type="submit">Add</button>
            </form>
            
        )
    }
}

export default compose(
    graphql(addSongMutation, { name: "addSongMutation"}),
    withApollo
  )(AddSong)
