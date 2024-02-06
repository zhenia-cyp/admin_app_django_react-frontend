import React, {Component} from 'react';
import axios from "axios";



export class Deleter extends Component<{id: number, endpoint: string, handleDelete: any}> {
    delete = async () => {
        if (window.confirm("Delete the product?")){
            await axios.delete(`${this.props.endpoint}/${this.props.id}/`);
            this.props.handleDelete(this.props.id);
        }
    }
    render() {
        return (
            <a className="btn btn-sm btn-outline-secondary" onClick={() => this.delete()}>Delete</a>
        );
    }
}