import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    formOpen: (id: string) => void;
    formClose: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, selectActivity, selectedActivity, cancelSelectActivity, editMode, formClose, formOpen, createOrEdit, deleteActivity }: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity} ></ActivityList>
            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode &&
                    <ActivityDetails //form khulna hai yahaan se
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        formOpen={formOpen}
                    //formClose={formClose}
                    />}
                {editMode &&
                    <ActivityForm //band tbhi hoga jb khula hoga
                        formClose={formClose}
                        activity={selectedActivity}
                        createOrEdit={createOrEdit} />}
            </Grid.Column>
        </Grid>
    )
}