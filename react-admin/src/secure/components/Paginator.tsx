import React, {Component} from "react";
export class Paginator extends Component<{lastPage:number, handlePageChange: any}>{
    page = 1;
    previous =  () => {
        if(this.page === 1) {
            return
        }
        else {
            this.page--;
            this.props.handlePageChange(this.page);

        }
    }

    next =  () => {
        if(this.page === this.props.lastPage) {
            return
        }
        else {
            this.page++;
            this.props.handlePageChange(this.page);

        }
        console.log('page::', this.page);
    }

    render() {
        return (
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" onClick={this.previous}>previous</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link" onClick={this.next}>next</a>
                    </li>

                </ul>
            </nav>
        );
    }

}