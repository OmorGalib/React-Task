import React, { useState, useEffect } from 'react';
import { Button, Modal, FormControl, FormCheck } from 'react-bootstrap';

const Problem2 = () => {
    const [modalA, setModalA] = useState(false);
    const [modalB, setModalB] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);

    // const fetchContacts = async () => {
    //     const response = await fetch('https://contact.mediuswars.com/api/contacts');
    //     const data = await response.json();
    //     setContacts(data.contacts);
    // };
    const fetchContacts = async () => {
        try {
            const response = await fetch('https://contact.mediuswars.com/api/contacts');
            if (!response.ok) {
                throw new Error(`Failed to fetch contacts: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setContacts(data.contacts);
        } catch (error) {
            console.error('Error fetching contacts:', error.message);
        }
    };

    const toggleEvenCheckbox = () => {
        setOnlyEven(!onlyEven);
    };

    const toggleModalA = () => setModalA(!modalA);
    const toggleModalB = () => setModalB(!modalB);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <Button className="btn-lg btn-outline-primary" onClick={toggleModalA}>All Contacts</Button>
                    <Button className="btn-lg btn-outline-warning" onClick={toggleModalB}>US Contacts</Button>
                </div>
            </div>

            {/* Modal A */}
            <Modal show={modalA} onHide={toggleModalA}>
                <Modal.Header closeButton>
                    <Modal.Title>All Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Contact List */}
                    {contacts.map(contact => (
                        <div key={contact.id}>{contact.name}</div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="#46139f" onClick={toggleModalA}>Modal Button A</Button>
                    <Button variant="#ff7f50" onClick={toggleModalB}>Modal Button B</Button>
                    <Button variant="#46139f" onClick={toggleModalA}>Close</Button>
                    <FormCheck
                        type="checkbox"
                        id="evenCheckbox"
                        label="Only even"
                        checked={onlyEven}
                        onChange={toggleEvenCheckbox}
                    />
                </Modal.Footer>
            </Modal>

            {/* Modal B */}
            <Modal show={modalB} onHide={toggleModalB}>
                <Modal.Header closeButton>
                    <Modal.Title>US Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* US Contact List */}
                    {contacts.filter(contact => contact.country === 'US').map(contact => (
                        <div key={contact.id}>{contact.name}</div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="#46139f" onClick={toggleModalA}>Modal Button A</Button>
                    <Button variant="#ff7f50" onClick={toggleModalB}>Modal Button B</Button>
                    <Button variant="#46139f" onClick={toggleModalB}>Close</Button>
                    <FormCheck
                        type="checkbox"
                        id="evenCheckbox"
                        label="Only even"
                        checked={onlyEven}
                        onChange={toggleEvenCheckbox}
                    />
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Problem2;