const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Click First Alphabet Of Your NameðŸ˜Ž  & SeeðŸŽ§\nA- mix.piplap.com/--a \nB- mix.piplap.com/--b \nC- mix.piplap.com/--c \nD- mix.piplap.com/--d \nE- mix.piplap.com/--e \nF- mix.piplap.com/--f \nG- mix.piplap.com/--g \nH- mix.piplap.com/--h \nI-  mix.piplap.com/--i \nJ- mix.piplap.com/--j \nK- mix.piplap.com/--k \nL- mix.piplap.com/--l \nM- mix.piplap.com/--m \nN- mix.piplap.com/--n \nO- mix.piplap.com/--o \nP- mix.piplap.com/--p \nQ- mix.piplap.com/--q \nR- mix.piplap.com/--r \nS- mix.piplap.com/--s \nT- mix.piplap.com/--t \nU- mix.piplap.com/--u \nV- mix.piplap.com/--v \nW- mix.piplap.com/--w \nX- mix.piplap.com/--x \nY- mix.piplap.com/--y \nZ- mix.piplap.com/--z \nSHARE WITH ALL FRIENDS \n  ðŸ’ðŸ¦‰ðŸ¦§'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});