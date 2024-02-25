import React, { useState } from 'react';

const Problem1 = () => {
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const status = e.target[1].value;
        setTasks([...tasks, { name, status }]);
        e.target.reset();
    }

    const handleClick = (val) => {
        setShow(val);
    }

    const filteredTasks = tasks.filter(task => {
        if (show === 'all') {
            return true;
        } else {
            return task.status === show;
        }
    }).sort((a, b) => {
        if (a.status === 'Active') return -1;
        if (b.status === 'Active') return 1;
        if (a.status === 'Completed' && b.status !== 'Active') return -1;
        if (b.status === 'Completed' && a.status !== 'Active') return 1;
        return 0;
    });

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;