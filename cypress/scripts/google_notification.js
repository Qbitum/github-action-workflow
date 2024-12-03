const pushNotifications = require("@qbitum/qtaf-google-notification/src/pushNotification")
const mochawesomereport = require('../report/mochawesome-report/mochawesome.json');

config = {
    project_title:"Github Actions Workflow Testing",
    project_subtitle:"Github Actions Workflow Testing - Regression Test",
    owner:"Tester",
    suite:"GAWT - REGRESSION TEST SUITE",
}
pushNotifications.pushNotifications(mochawesomereport,config).then(
    data => console.log("")
).catch(
    error => console.log(error)
)