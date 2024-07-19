import assignments from "../data/assignments";
const newAssignment = assignments.map(item => {
    return (
        item.lecturer
    )
})
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id: 1,
        title: "New Assignment",
        description: "New group assignment to do.",
        announcer: `${newAssignment}`,
    },
    {
        id: 1,
        description: "Your next term registration is due on 19th October.",
        title: "Remember to Register for next term",
        announcer: "Dean of studies",
    },
    {
        id: 1,
        description: "If you havent mantained 60% average of total points, be aware that you are in review of course repeaters!",
        title: "Be Careful!",
        announcer: "HOD",
    },
];
