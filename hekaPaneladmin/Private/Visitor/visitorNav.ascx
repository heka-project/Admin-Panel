<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="visitorNav.ascx.cs" Inherits="hekaPaneladmin.Private.Visitor.visitorNav" %>
<link href="visitorNav.css" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="visitorNav.js"></script>

<div class="side-bar border-right d-md-block d-lg-block d-sm-none d-none col-lg-3 col-md-4" style="border-right:3px solid black;padding-right:0;height:680px">
    <div style="background-color:#dddddd; width:100% ; padding-left:50px;padding-bottom:5px;padding-top:10px">
        <p style="font-size:40px"><img src="Images/hekaIcon.png"  style="width:60px"/ ><b>heka</b></p>
    </div>

    <ul >
        <li class="nav-item" >
            <a class="nav-link " href="parentViewReq.aspx" > Parent View Requests</a >
        </li >
        <li class="nav-item" >
            <a class="nav-link " href="skillSets.aspx" > Skill Sets</a >
        </li >
        <li class="nav-item" >
            <a class="nav-link " href="students.aspx" > Students</a >
        </li >
        <li class="nav-item" >
            <a class="nav-link " href="mentors.aspx" > Mentor</a >
        </li >
        
    </ul >
</div>


 <script>
     let opened = false;
     $('.btn').on("click", function () {
         $('.btn').toggleClass('btnc');
         document.getElementById('nav').style.width = opened ? '0px' : '80%';
         opened = !opened;
     });
</script>