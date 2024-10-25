
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Aliquip ex in ad eiusmod minim ipsum incididunt et. Aliquip cillum dolore qui consectetur ea officia duis sunt dolore mollit et aliquip elit. Sunt tempor amet veniam elit dolore aliqua nisi elit. Ex culpa esse mollit cupidatat. Ad exercitation eu deserunt minim pariatur est in mollit aute consequat cupidatat laborum. In reprehenderit enim consequat labore. Magna aliquip sunt Lorem quis nostrud.</Typography> */}

            <NothingSelectedView />

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: "fixed",
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
            {/* <NoteView /> */}

        </JournalLayout>
    )
}
