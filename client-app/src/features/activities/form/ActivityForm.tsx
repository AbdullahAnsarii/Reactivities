import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";

interface Props{
    activity: Activity | undefined;
    formClose: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({activity: Initial, formClose, createOrEdit, submitting}:Props){
    const initialState = Initial ?? {
        id: "",
        title: "",
        date: "",
        description: "",
        category: "",
        city: "",
        venue: ""
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value}) //inout change ho tou map hojaye gaa activity hook p
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder="Title" name="title" value={activity.title} onChange={handleInputChange} />
                <Form.TextArea placeholder="Description" name="description" value={activity.description} onChange={handleInputChange} />
                <Form.Input placeholder="Category" name="category" value={activity.category} onChange={handleInputChange} />
                <Form.Input type="date" placeholder="Date" name="date" value={activity.date} onChange={handleInputChange} />
                <Form.Input placeholder="City" name="city" value={activity.city} onChange={handleInputChange} />
                <Form.Input placeholder="Venue" name="venue" value={activity.venue} onChange={handleInputChange} />
                <Button loading={submitting} floated="right" positive type="submit" content="Submit"/>
                <Button onClick={formClose} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}