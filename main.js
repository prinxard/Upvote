new Vue({
    props: ['sub'],
    el: '#app',
    data: {
        submissions: submissions,
    },
    computed: {
        sortedSubmission(){
            return this.submissions.sort((a, b) =>{
                return b.votes - a.votes
            });
        }
    },
    methods: {
        upvote(submissionId) {
        const submission = this.submissions.find(
        submission => submission.id === submissionId
        );
        submission.votes++;
        }
    }
});