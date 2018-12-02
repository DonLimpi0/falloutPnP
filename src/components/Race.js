import React, {Component} from 'react'
import Cookies from 'js-cookie'

class Race extends Component {
  constructor(props) {
    super(props)

    this.state = {
      races: [
        {
          name: "Mensch",
          description: "Menschen wie du und ich."
        },
        {
          name: "Ghoul",
          description: `Von der Strahlung stark beeinflusste Menschen,
          deren Kreislauf verlangsamt ist. Demzufolge haben sie eine höhere
          Resistenz gegen die Einflüsse der post-nuklearen Umwelt und eine höhere
          Lebenserwartung. Ihr Haut hängt ihnen vom Körper und sie haben kaum Haar.`,
        }


      ]
    }
  }

  createRaces = () => {
    return this.state.races.map((e, i) => (
      <div key={i} className="col-md-3">
        <div className="card" onClick={() =>(
          $(`#modal${e.name}`).modal(`show`)
        )}>
          <div className="card-body">
            <h5 className="card-title">
              {e.name}
            </h5>

            </div>
        </div>
        <div className="modal" id={`modal${e.name}`}tabindex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => (
                    Cookies.set('race', e.name)
                )}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.createRaces()}
        </div>
      </div>
    )
  }
}
export default Race
