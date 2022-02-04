
jQuery.validator.setDefaults({
debug: true,
success: "valid"
});

$( "#myform" ).validate({
rules: {
    mal1: {required: true,number: true, range: [1, 50]},
    mal2: {required: true,number: true, range: [1, 50]},
    mal3: {required: true,number: true, range: [1, 50]},
    eng1: {required: true,number: true,range: [1, 50]},
    eng2: {required: true,number: true,range: [1, 50]},
    eng3: {required: true,number: true,range: [1, 50]},
    soc1: {required: true,number: true,range: [1, 50]},
    soc2: {required: true,number: true,range: [1, 50]},
    soc3: {required: true,number: true,range: [1, 50]},
    sci1: {required: true,number: true,range: [1, 50]},
    sci2: {required: true,number: true,range: [1, 50]},
    sci3: {required: true,number: true,range: [1, 50]},
    math1:{required: true,number: true, range: [1, 50]},
    math2:{required: true,number: true, range: [1, 50]}, 
    math3:{required: true,number: true, range: [1, 50]}
    },
messages: {
    math1:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    math2:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    math3:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    sci1:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    sci2:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    sci3:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    soc1:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    soc2:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    soc3:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    eng1:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    eng2:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    eng3:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    mal1:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    mal2:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"},
    mal3:{required: "This field is required.",number: "Please enter a valid number. ",range: "Value between 1 and 50"}
}
}); 




                
          