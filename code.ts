let cam = Scene.getItem("QWfQw84a") as CameraItem; //change it
let xadjuster = Scene.getItem("WZDpHrIR") as Cuboid; //change it
let a = [];

let ypwall = Scene.createCuboid(0,-30.6,0);
ypwall.width = 100;
ypwall.height = 100;
ypwall.opacity = 0.0;
let ymwall = Scene.createCuboid(0,30.90,0);
ymwall.width = 100;
ymwall.height = 100;
ymwall.opacity = 0.0;
let xpwall = Scene.createCuboid(-30.6,0,0);
xpwall.width = 100;
xpwall.height = 100;
xpwall.opacity = 0.0;
xpwall.transform.rotation = xadjuster.transform.rotation;
let xmwall = Scene.createCuboid(29.94,0,0);
xmwall.width = 100;
xmwall.height = 100;
xmwall.opacity = 0.0;
xmwall.transform.rotation = xadjuster.transform.rotation;
let contdown = 5;

ypwall.onCollisionEnter((item) =>
{

    if(item == cam && contdown == 0)
    {

        cam.transform.position = new Vector3(cam.transform.position.x,30.75,cam.transform.position.z); 

        Scene.getItems().forEach((item)  => 
        {

            item.transform.position = new Vector3(item.transform.position.x,item.transform.position.y +61,item.transform.position.z);

        });

        ypwall.transform.position = new Vector3(0,-30.6,0);
        ymwall.transform.position = new Vector3(0,30.90,0);
        xpwall.transform.position = new Vector3(-30.6,0,0);
        contdown = 5;

    }

});
ymwall.onCollisionEnter((item) =>
{

    if(item == cam && contdown == 0)
    {

        cam.transform.position = new Vector3(cam.transform.position.x,-30.6,cam.transform.position.z); 

        Scene.getItems().forEach((item)  => 
        {

            item.transform.position = new Vector3(item.transform.position.x,item.transform.position.y -61,item.transform.position.z);

        });

        ymwall.transform.position = new Vector3(0,30.90,0);
        ypwall.transform.position = new Vector3(0,-30.6,0);
        xpwall.transform.position = new Vector3(-30.6,0,0);
        xmwall.transform.position = new Vector3(29.94,0,0);
        contdown = 5;

    }

});
xpwall.onCollisionEnter((item) =>
{

    if(item == cam && contdown == 0)
    {

        cam.transform.position = new Vector3(-30.6,cam.transform.position.y,cam.transform.position.z); 

        Scene.getItems().forEach((item)  => 
        {

            item.transform.position = new Vector3(item.transform.position.x + 61,item.transform.position.y,item.transform.position.z);

        });

        ymwall.transform.position = new Vector3(0,30.90,0);
        ypwall.transform.position = new Vector3(0,-30.6,0);
        xpwall.transform.position = new Vector3(-30.6,0,0);
        xmwall.transform.position = new Vector3(29.94,0,0);
        contdown = 5;

    }

});
xmwall.onCollisionEnter((item) =>
{

    if(item == cam && contdown == 0)
    {

        cam.transform.position = new Vector3(29.94,cam.transform.position.y,cam.transform.position.z); 

        Scene.getItems().forEach((item)  => 
        {

            item.transform.position = new Vector3(item.transform.position.x - 61,item.transform.position.y,item.transform.position.z);

        });

        ymwall.transform.position = new Vector3(0,30.90,0);
        ypwall.transform.position = new Vector3(0,-30.6,0);
        xpwall.transform.position = new Vector3(-30.6,0,0);
        xmwall.transform.position = new Vector3(29.94,0,0);
        contdown = 5;

    }

});

Time.scheduleRepeating(() =>
{

    if(contdown != 0)
    {

        contdown --;

    }
});
