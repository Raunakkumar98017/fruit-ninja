    var PLAY = 1;
    var END = 0;
    var gameState = 1;
    var ground, groundImage;
    var knife,knifeImage;
    var apple,appleImage
    var pineapple,pineappleImage
    var banana,bananaImage
    var mango,mangoImage;
    var watermelon,watermelonImage;
    var monster1,monster2;
    var monster1Image,monster2Image;
    var fruitGroup,monsterGroup;
    var score;
    var gameOver,gameOverImage; 
    var knifeswooshsound;
    var gameoversound;


  function preload(){
   //load your images here 
      groundImage = loadImage("background.jpg");
      knifeImage = loadImage("knife.png");
      appleImage = loadImage("apple.png");
      mangoImage = loadImage("mango.png");
      watermelonImage = loadImage("watermelon.png");
      pineappleImage = loadImage("pineapple.png");
      bananaImage = loadImage("banana.png");
      monster1Image = loadImage("monster1.png");
      monster2Image = loadImage("monster2 .png");
      gameOverImage = loadImage("gameover.png");
      knifeswooshsound = loadSound("SwooshSound.mp3")
      gameoversound = loadSound("Game Over.mp3")
     }

    function setup() {
      //creating canvas
      createCanvas(600, 600);


      //to make the ground
      ground = createSprite(300,300,600,600);
      ground.addImage("ground",groundImage);
      ground.scale=2;

      knife = createSprite(200,200,50,50);
      knife.addImage("knife",knifeImage);
      knife.scale = 0.2;

      fruitGroup = createGroup();
      monsterGroup = createGroup();

      score = 0;


      gameOver = createSprite(300,300,10,10);
      gameOver.addImage("gameover",gameOverImage);
      gameOver.scale = 0.5;
      gameOver.visible = false;

    }

    function draw() {

        background(220);

         if (gameState === PLAY){



              knife.y = mouseY;
              knife.x = mouseX;
           
           
      
              var select_fruit =  Math.round(random(1,5));
           
              
           if (frameCount % 50 == 0) {
                            
                    if (select_fruit == 1) {
                        apple();
                    }
                    else if (select_fruit == 2) {
                        mango();
                    }

                    else if (select_fruit == 3) {
                        banana();
                    }
                    else if (select_fruit == 4) {
                        watermelon();
                    }
                    else if (select_fruit == 5) {
                        pineapple();
                    }
             
          }


          var select_monster =  Math.round(random(1,2));
              if (frameCount % 300 == 0) {
                  if (select_monster == 1) {
                      monster1();
                  }
                  else if (select_monster == 2) {
                      monster2();
                  }

         }
             if(fruitGroup.isTouching(knife)){
               fruitGroup.destroyEach();
                knifeswooshsound.play();
               score = score+1;
                   } 
             if(monsterGroup.isTouching(knife)){
               monsterGroup.destroyEach();
               fruitGroup.destroyEach();
               gameoversound.play();
               gameState = END;
             }
       }
            if(gameState === END){
              gameOver.visible = true;

              knife.visible = false;
            }

     drawSprites();
  
      fill("black")
      textSize(30);
      text("score = "+score,250,50);

  }

    function apple (){
      position = Math.round(random(1,2));
      var apple = createSprite(0,Math.round(random(25,570)),10,10);
      if (position == 1){
        apple.x=580;
        apple.velocityX=-(8+(score/4));
      }
      else
      {
        if (position == 2){
          apple.x=0;
            apple.velocityX=(8+(score/4));
        }
      }
      apple.addImage(appleImage);
    
      apple.lifetime = 320;
      apple.scale = 0.2;
      fruitGroup.add(apple);
    }
    function mango (){
      position = Math.round(random(1,2));
      var mango = createSprite(0,Math.round(random(25,570)),10,10);
       if (position == 1){
        mango.x=580;
        mango.velocityX=-(8+(score/4));
      }
      else
      {
        if (position == 2){
          mango.x=0;
          mango.velocityX=(8+(score/4));
        }
      }
      mango.addImage(mangoImage);
      mango.lifetime = 320;
      mango.scale = 0.3;
      fruitGroup.add(mango);
    }

    function banana (){
      position = Math.round(random(1,2));
      var banana = createSprite(0,Math.round(random(25,570)),10,10);
      if (position == 1){
       banana.x=580;
       banana.velocityX=-(8+(score/4));
      }
      else
      {
        if (position == 2){
         banana.x=0;
         banana.velocityX=(8+(score/4));
        }
      }
      banana.addImage(bananaImage);
      banana.lifetime = 320;
      banana.scale = 0.15;
      fruitGroup.add(banana);
    }
    function watermelon (){
      position = Math.round(random(1,2));
        var watermelon =                                                              createSprite(0,Math.round(random(25,570)),10,10);
      if (position == 1){
        watermelon.x=580;
        watermelon.velocityX=-(8+(score/4));
      }
      else
      {
        if (position == 2){
          watermelon.x=0;
          watermelon.velocityX=(8+(score/4));
        }
      }
        watermelon.addImage(watermelonImage);
        watermelon.lifetime = 320;
        watermelon.scale = 0.3;
        fruitGroup.add(watermelon);
    }
    function pineapple (){
      position = Math.round(random(1,2));
        var pineapple =                                                              createSprite(0,Math.round(random(25,570)),10,10);
      if (position == 1){
        pineapple.x=580;
        pineapple.velocityX=-(8+(score/4));
      }
      else
      {
        if (position == 2){
          pineapple.x=0;
          pineapple.velocityX=(8+(score/4));
        }
      }
        pineapple.addImage(pineappleImage);
        pineapple.lifetime = 320;
        pineapple.scale = 0.3;
        fruitGroup.add(pineapple);
    }
    function monster1 (){
        var monster1 =                                                               createSprite(0,Math.round(random(25,570)),10,10);
        monster1.addImage(monster1Image)
        monster1.velocityX = (8+(score/10));
        monster1.lifetime = 320;
        monster1.scale = 0.1
        monsterGroup.add(monster1);
    }
    function monster2 (){
        var monster2 =                                                               createSprite(580,Math.round(random(25,570)),10,10);
        monster2.addImage(monster2Image)
        monster2.velocityX = -(8+(score/10));
        monster2.lifetime = 320;
        monster2.scale = 0.15;
        monsterGroup.add(monster2);
    }





  


  
