// script.js
$(document).ready(function() {
    // Initialize the datepicker
    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: '0d'
    });

    // Function to generate time slots
    function generateTimeSlots(date) {
        const timeSlots = [
            '9:00AM', '9:30AM', '9:45AM', '10:00AM', '10:30AM', '10:45AM',
            '11:00AM', '11:30AM', '11:45AM', '12:00PM', '12:30PM', '12:45PM',
            '1:00PM', '1:30PM', '1:45PM', '2:00PM', '2:30PM', '2:45PM',
            '3:00PM', '3:30PM', '4:15PM', '5:00PM'
        ];

        let timeSlotsHTML = '';
        timeSlots.forEach((slot, index) => {
            timeSlotsHTML += `<div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">${slot}</div></div>`;
        });

        $('#timeSlots').html(timeSlotsHTML);
    }

    // Generate time slots on date change
    $('.datepicker').datepicker().on('changeDate', function(e) {
        const selectedDate = e.format(0, 'yyyy-mm-dd');
        generateTimeSlots(selectedDate);
    });

    // Add click event listener to time slots
    $(document).on('click', '.cell', function() {
        $('.cell').removeClass('select');
        $(this).addClass('select');
    });
});