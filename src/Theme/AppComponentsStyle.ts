class AppComponentsStyle {

    // Modal Style
    public static getLinkStyle = (isActive: boolean, isHovered: boolean): React.CSSProperties => ({
        padding: "10px 10px",
        margin: "5px 2px",
        cursor: "pointer",
        textAlign: "center" as "center",
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: isActive ? "8px" : undefined,
        color: isActive ? "#007bff" : (isHovered ? "#007bff" : "#333"),
        backgroundColor: isActive ? "#e9ecef" : (isHovered ? "#f1f1f1" : "transparent"),
        transition: "all 0.3s ease-in",
        fontSize: "1.2rem",
        border: "1px solid transparent",
        borderRadius: "25px"
    });

    public static modalMenu: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        justifyContent: "space-evenly",
        margin: "0 auto"
    };

    public static largeScreenMenu: React.CSSProperties = {
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
    };

    // ----------------------------------------------------------

    // Header Style
    public static headerSmallLogo = {
        verticalAlign: "bottom",
        fontSize: "2.1rem"
    };

    public static headerLargeLogo = {
        verticalAlign: "bottom",
        fontSize: "50px"
    };

    public static headerLinkIcon = {
        marginBottom: "-6px"
    };

    // ----------------------------------------------------------

    // Project Page Style:
    public static projectPageBtn = {
        margin: "5px"
    };

    // ----------------------------------------------------------

    // Frame Video Style:
    public static frameVideoPlayIcon = { 
        fontSize: "100px", 
        color:"#ffffff",
        border: "5px red"
    };


    // ----------------------------------------------------------

    // Floating Button Style:
    public static floatingButtonFab = {
        bottom: 84 
    };

    public static floatingButtonWhatsappAction = { 
        backgroundColor: "#25D366", 
        marginLeft: "45px" 
    };

    public static floatingButtonCallAction = { 
        backgroundColor: "rgb(25, 118, 210)", 
        marginLeft: "45px" 
    };
    
    public static floatingButtonEmailAction = { 
        backgroundColor: "#fd613f", 
        marginLeft: "45px" 
    };

    // ----------------------------------------------------------
        
    // Footer Style:
    public static socialLink = {
        pl: 1,
        pr: 1
    };

    // ----------------------------------------------------------

    // Copyrights Style:
    public static copyrightsBox = {
        marginBottom: "5px"
    };
}

export default AppComponentsStyle;
