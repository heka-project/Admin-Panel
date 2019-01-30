<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="adminNav.ascx.cs" Inherits="hekaPaneladmin.Private.Admin.adminNav" %>
<link href="adminNav.css" rel="stylesheet" />
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="adminNav.js"></script>

<div class="sideBar" >
    <div id="topSection" >
        <img src="../../Images/image3.png" / >
        <h1>Welcome,<br />Admin</h1 >
    </div >
     <ul >
        <li class="nav-item" >
            <a class="nav-link " href="visitorHome.aspx" >Heat map of progression</a >
        </li >
        <li class="nav-item" >
            <a class="nav-link " href="sendPackages.aspx" >Send more Packages</a >
        </li >
        <li class="nav-item" >
            <a class="nav-link " href="suggestionFrmMentor.aspx" > Other Map</a >
        </li >
         <li class="nav-item" >
            <asp:Button ID="btnLogOut" Text="Log Out" CssClass="btn btn-link nav-link"  style="font-size:30px" runat="server"  CausesValidation="False"/>
        </li >
    </ul >
</div>
<a class="btn"></a>
<script>
    $('.btn').on("click", function () {
    $('.btn').toggleClass('btnc');
    $('.sideBar').toggleClass('side');
})
</script>