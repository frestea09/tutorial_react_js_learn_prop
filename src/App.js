import React,{Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
      const isiData = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]
  
      return (
          <Table dataIsi={isiData} />
      )
    }
  }

export default App