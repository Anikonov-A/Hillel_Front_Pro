import {Component, Fragment} from 'react'
import SmileCard from '../SmileCard'

import './Voting.scss';

export default class Voting extends Component {
    state = {
        candidates: [],
        votes: {},
        results: [],
    }

    handleVote = (id) => {
        this.setState(prevState => {
            const updatedVotes = new Map(prevState.votes);
            updatedVotes.set(id, updatedVotes.get(id) + 1);
            return {
                votes: updatedVotes
            };
        });
    }
    showResults = () => {
        const {votes} = this.state
        const sortedArray = Array.from(votes.entries());
        sortedArray.sort((a, b) => b[1] - a[1]);
        const sortedMap = new Map(sortedArray)
        console.log(sortedMap)

        if (sortedArray.length > 0) {
            this.setState({
                results: sortedMap,
            })
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
            .then(res => res.json())
            .then(result => {
                const ids = result.map(item => item.id);
                const votesMap = new Map(ids.map(id => [id, 0]));

                this.setState({
                    candidates: result,
                    votes: votesMap
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Choose the best smile ever:</h1>
                <div className='container'>
                    {!this.state.candidates.length && <div>No candidates yet...</div>}

                    {this.state.candidates.map(item => (
                        <div key={item.id}>
                            <SmileCard
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                smile={item.smile}
                                onVote={this.handleVote}
                            />
                            {this.state.votes.get(item.id)}
                        </div>
                    ))}
                </div>
                <div className={'result'}>
                    <button className={'button'} onClick={this.showResults}>Show Results</button>
                    <h2>Here is our ladder:</h2>
                    {
                        Array.from(this.state.results).map(([id, count], index) => {
                            const candidate = this.state.candidates.find(candidate => candidate.id === id);
                            return (
                                <Fragment key={id+index}>
                                    <h3>{`${index + 1}# Place with ${count} votes`}</h3>
                                    <SmileCard
                                        id={id}
                                        title={candidate.title}
                                        description={candidate.description}
                                        smile={candidate.smile}
                                    />
                                </Fragment>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
