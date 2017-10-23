



function getAge(yBorn)
{
    return 2017 - yBorn;
}


function computeFullAge(yearBornVector)
{
    var age = new Array();
    var isFullAge = new Array();
    console.log(yearBornVector)
    for ( var i = 0 ; i < yearBornVector.length ; i++)
        {
            age.push(getAge(yearBornVector[i]));
            if (age[i] >= 18)
                isFullAge.push(true);
            else isFullAge.push(false);
        }

        console.log(isFullAge)
}


computeFullAge([1952,2009,2001,1928,1935])

computeFullAge([2009,2007,1978,1926])