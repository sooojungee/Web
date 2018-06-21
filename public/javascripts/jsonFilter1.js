var x = [
    {
        gender: '남',
        items: [
            {
                number: 2010,
                items: [
                    {
                        age: 25,
                        name: ["재종"]
                    }
                ]

            },
            {
                number: 2014,
                items: [
                    {
                        age: 24,
                        name: ["준엽"]
                    }
                ]

            },
            {
                number: 2015,
                items: [
                    {
                        age: 23,
                        name: ["현식"]
                    }
                ]

            }
        ]
    },
    {
        gender: '여',
        items: [
            {
                number: 2016,
                items: [
                    {
                        age: 22,
                        name: ["수정"]
                    },
                    {
                        age: 21,
                        name: ["주원"]
                    }
                ]

            },
        ]
    }

];

var selectGender;
var selectNumber;

var selectAge;

const filters = ["all", "all", "all"];

$('select').on('change', function () {
    const $this = $(this);
    const $selectedOption = $this.find('option:selected');
    const currentFilter = $selectedOption.text();
    const index = $this.attr('index') * 1;

    filters[index] = currentFilter;
    console.log(filters);

    for (var i = 0; i < x.length; i++) {
        if (filters[0] === x[i].gender) {
            selectGender = x[i].items;
            console.log(selectGender.length + 'kk');
            console.log(selectGender);
            for (var j = 0; j < selectGender.length; j++) {
                if (selectGender[j].number * 1 === filters[1] * 1) {

                    selectNumber = selectGender[i].items;
                    console.log(selectNumber.length + 'dd');
                    console.log(selectGender[j].number+ 'ss');
                    for (var k = 0; k < selectNumber.length; k++) {
                        if (selectNumber[k].age * 1 === filters[2] * 1) {

                            selectAge = selectNumber[k].name;

                        }
                    }
                }
            }
        }
    }


    $('.answer').text(selectAge);

    // for(var j = 0; j < selectGender.items.length; j++){
    //     if(filters[1] === selectGender.items[j]){
    //         selectNumber = selectGender.items[j];
    //         console.log(selectNumber.name.length + 'll');
    //     }
    // }


    // for(var i = 0; i < selectNumber.items.length; i++){
    //     if(filters[2] === selectNumber.items[i]){
    //         selectAge = selectNumber.items[i];
    //         console.log(selectAge.name.length + "sdf");
    //     }
    // }

    // for(var i = 0; i < selectAge.name.length)

});


// var gender = [];
//
// console.log('sdf' +x[0].gender);
// console.log(json[0].numberTag.length);
//
// console.log(json[0].numberTag[0].ageTag);
// var genderselection;
//
// for(var i = 0; i < json.length; i++){
//     if(genderSelect === json[i].gender){
//
//     }
// }
//
//
// for (var i = 0; i < x.length; i++) {
//     gender[i] = x[i];
// }


// var selects = $('select option:selected');
// var filters;
// for(var i = 0; i < selects.length; i++){
//     var $selections = $(selects.get(i));
//     var options = $selections.text();
//     filters.push(options);
// }
//     console.log(filters);

