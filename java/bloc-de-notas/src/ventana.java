import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Menu;
import java.awt.MenuBar;
import java.awt.MenuItem;
import java.awt.PopupMenu;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.awt.event.MouseEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JCheckBoxMenuItem;
import javax.swing.JColorChooser;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JRadioButtonMenuItem;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JTextArea;
import javax.swing.JTextPane;
import javax.swing.SwingConstants;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.event.MouseInputAdapter;
/*** ventana.java - Created on 7 de mayo de 2008, 9:13 ***/
/*** @author Carlos Mur ***/
public class ventana extends JFrame
{
    JMenuBar mBarra;
    JMenu mArchivo,mEdicion,mFormato,mVer;
    JMenuItem mExit,mEstado;
    JTextArea mEtiqueta;
    JLabel mFirma,mCabecera,mTitulo,mBarraEstado;
    JPanel panelPie,panelMenu,panelEncabezado;
    JScrollPane srcScroll;
    JSplitPane splSplit;
    ImageIcon iconNew,iconOpen,iconSave,iconExit;
    ImageIcon iconCut,iconPaste,iconCopy,iconTime;
    ImageIcon iconAjuste,iconFuente;
    ImageIcon iconEstado;
    Font fPeque,fMedi,fGran;
    
    /** Crear una nueva instancia de ventana */
    public ventana()
    {
        Font fPie=new Font("Verdana",Font.BOLD,8);
        Font fNormal=new Font("Verdana",Font.BOLD,12);
        Font fTitulo=new Font("Verdana",Font.BOLD,20);
        fPeque=new Font("Verdana",Font.BOLD,8);
        fMedi=new Font("Verdana",Font.BOLD,16);
        fGran=new Font("Verdana",Font.BOLD,24);
        
        /** Creacion y configuracion del menu */
        JMenuBar mBarra = new JMenuBar();
        setJMenuBar(mBarra);
        
        /** Oyentes para eventos de los Menus y submenus. */
        Menu ActionListener=new Menu();
        
        /** Creacion y Configuracion del TextPane. */ 
        mEtiqueta=new JTextArea();
        mEtiqueta.setOpaque(true);
        mEtiqueta.setForeground(Color.BLACK);
        mEtiqueta.setBorder(new EmptyBorder(5,5,5,5));
        
        /** Creacion y Configuracion de la Barra-Estado. */ 
        mBarraEstado=new JLabel();
        mBarraEstado.setOpaque(true);
        mBarraEstado.setForeground(Color.BLACK);
        mBarraEstado.setVisible(false);
        
        /** ScrollPane. */
        srcScroll=new JScrollPane(mEtiqueta,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        srcScroll.setBorder(new EmptyBorder(10,10,10,10));
        
        /** SplitPane. */
        splSplit=new JSplitPane(splSplit.HORIZONTAL_SPLIT);
        splSplit.setBorder(new EmptyBorder(5,5,5,5));
        splSplit.setBackground(Color.WHITE);
        splSplit.add(srcScroll);
        splSplit.setDividerSize(0);
        splSplit.setDividerLocation(170);
        
        //Paneles de Informacion.
        panelEncabezado=new JPanel();
        panelEncabezado.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelEncabezado.setOpaque(true);
        panelMenu=new JPanel();
        panelMenu.setLayout(new GridLayout(1,2));
        panelMenu.setOpaque(true);
        panelMenu.add(splSplit);
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.RIGHT));
        panelPie.setOpaque(true);
        panelPie.add(mBarraEstado);
        
        //Creacion de los Menus.
        JMenu mArchivo=new JMenu("Archivo");
        JMenuItem mNew=new JMenuItem("Nuevo");
        ImageIcon iconNew=new ImageIcon(getClass().getResource("/new.png"));
        mNew.setIcon(iconNew);
        mArchivo.add(mNew);
        mNew.addActionListener(new Menu());
        JMenuItem mOpen=new JMenuItem("Abrir");
        ImageIcon iconOpen=new ImageIcon(getClass().getResource("/open.png"));
        mOpen.setIcon(iconOpen);
        mArchivo.add(mOpen);
        mOpen.addActionListener(new Menu());
        JMenuItem mSave=new JMenuItem("Guardar");
        ImageIcon iconSave=new ImageIcon(getClass().getResource("/save.png"));
        mSave.setIcon(iconSave);
        mArchivo.add(mSave);
        mArchivo.addSeparator();
        mSave.addActionListener(new Menu());
        JMenuItem mExit=new JMenuItem("Salir");
        ImageIcon iconExit=new ImageIcon(getClass().getResource("/exit.png"));
        mExit.setIcon(iconExit);
        mArchivo.add(mExit);
        mExit.addActionListener(new Menu());
        mBarra.add(mArchivo);
        
      //Creacion de los SubMenus Edicion.
        JMenu mEdicion=new JMenu("Edicion");
        JMenuItem mCut=new JMenuItem("Cortar");
        ImageIcon iconCut=new ImageIcon(getClass().getResource("/cut.png"));
        mCut.setIcon(iconCut);
        mEdicion.add(mCut);
        mCut.addActionListener(new Menu());
        JMenuItem mPaste=new JMenuItem("Pegar");
        ImageIcon iconPaste=new ImageIcon(getClass().getResource("/paste.png"));
        mPaste.setIcon(iconPaste);
        mEdicion.add(mPaste);
        mPaste.addActionListener(new Menu());
        JMenuItem mCopy=new JMenuItem("Copiar");
        ImageIcon iconCopy=new ImageIcon(getClass().getResource("/copy.png"));
        mCopy.setIcon(iconCopy);
        mEdicion.add(mCopy);
        mEdicion.addSeparator();
        mCopy.addActionListener(new Menu());
        JMenuItem mTime=new JMenuItem("Hora Y Fecha");
        ImageIcon iconTime=new ImageIcon(getClass().getResource("/time.png"));
        mTime.setIcon(iconTime);
        mEdicion.add(mTime);
        mTime.addActionListener(new Menu());
        mBarra.add(mEdicion);
        
        //Creacion de los SubMenus Formato.
        JMenu mFormato=new JMenu("Formato");
        JMenuItem mAjuste=new JMenuItem("Ajuste de Linea");
        ImageIcon iconAjuste=new ImageIcon(getClass().getResource("/tools.png"));
        mAjuste.setIcon(iconAjuste);
        mFormato.add(mAjuste);
        mAjuste.addActionListener(new Menu());
        mBarra.add(mFormato);
        JMenu mFuente=new JMenu("Fuente");
        JMenuItem mPeque=new JMenuItem("Peque�a");
        mPeque.setFont(fPeque);
        mPeque.addActionListener(new Menu());
        JMenuItem mMedi=new JMenuItem("Mediana");
        mMedi.setFont(fMedi);
        mMedi.addActionListener(new Menu());
        JMenuItem mGran=new JMenuItem("Grande");
        mGran.setFont(fGran);
        mGran.addActionListener(new Menu());
        ButtonGroup grupoFuente=new ButtonGroup();
        grupoFuente.add(mPeque);
        grupoFuente.add(mMedi);
        grupoFuente.add(mGran);
        ImageIcon iconFuente=new ImageIcon(getClass().getResource("/font.png"));
        mFuente.setIcon(iconFuente);
        mFuente.add(mPeque);
        mFuente.add(mMedi);
        mFuente.add(mGran);
        mFormato.add(mFuente);
        mFuente.addActionListener(new Menu());
        mBarra.add(mFormato);
        
        //Creacion de los SubMenus Ver.
        JMenu mVer=new JMenu("Ver");
        JMenuItem mEstado=new JMenuItem("Barra de Estado");
        ImageIcon iconEstado=new ImageIcon(getClass().getResource("/eyes.png"));
        mEstado.setIcon(iconEstado);
        mVer.add(mEstado);
        mEstado.addActionListener(new Menu());
        mBarra.add(mVer);
        
        //jframe principal.
        add(panelEncabezado,BorderLayout.NORTH);
        add(panelMenu,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana). 
        setSize(800,600);
        setLocation(150,150);
        setTitle(" Bloc de Notas ");
        setVisible(true);
        
        //asignacion de oyentes a los objetos.
        kill KillClosing=new kill();
        addWindowListener(KillClosing);
    }
//-------------------------------Clase para matar Procesos(Kill)-----------------------------------//
class kill extends WindowAdapter
    {
       public void windowClosing(WindowEvent e)
       {
        //mensaje de confirmacion o cancelacion de la Aplicaicion.
        int close=JOptionPane.showConfirmDialog(null," �Desea cerrar la aplicacion? ","A.F.",0);
           //cierra la aplicacion.
        if(close==0)
            {
           System.exit(0);
            }
       }
    }
/**----------------------Clase para la opcion del Menu-Archivo de la aplicacion-----------------------------*/
class Menu implements ActionListener
    {
       public void actionPerformed(ActionEvent e)
       {
       JMenuItem mAux=(JMenuItem)e.getSource();
       String texto=mAux.getText();
        /** Cierra la aplicacion. */
        if(texto=="Salir")
            {
           System.exit(0);
            }
       /** Configuracion del boton para abrir Archivos */
       else if(texto=="Abrir")
        {
           JFileChooser mFile=new JFileChooser();
           int respuesta=mFile.showOpenDialog(ventana.this);
                if(respuesta==JFileChooser.APPROVE_OPTION)
                {
               File mArchivo=mFile.getSelectedFile();          
                }
           }
       /** Configuracion para abrir un nuevo archivo*/
        else if(texto=="Nuevo")
        {
            mEtiqueta.setText("");
        }
       /** Configuracion para guardar un nuevo archivo*/
        else if(texto=="Guardar")
        {
                   JFileChooser preg=new JFileChooser();
                   FileWriter filewriter = null;

                   int resp=preg.showSaveDialog(null);
                   BufferedWriter buffer = new BufferedWriter (filewriter);
                           
                            try
                            { 
                                filewriter = new FileWriter(preg.getSelectedFile().getAbsolutePath());
                                buffer.write(mEtiqueta.getText());
                                buffer.close();
                            }
                            catch (IOException ex)
                            {
                                ex.printStackTrace();
                            }                  
        }
/** ---------------------------Eventos para el Menu-Edicion de la aplicacion---------------------------- */
       if(texto=="Cortar")
            {
            mEtiqueta.cut();
            }
       /** Configuracion para abrir un nuevo archivo*/
        else if(texto=="Pegar")
            {
           mEtiqueta.paste();
            }
       /** Configuracion para guardar un nuevo archivo*/
        else if(texto=="Copiar")
            {
           mEtiqueta.copy();
            }
        /** Configuracion del boton para abrir Archivos */
       else if(texto=="Hora Y Fecha")
        {
       Date fecha=new Date();
       SimpleDateFormat formatoFecha=new SimpleDateFormat("dd-MM-yyyy\n");
       mEtiqueta.insert(formatoFecha.format(fecha),mEtiqueta.getCaretPosition());
        }
/** ---------------------------Eventos para el Menu-Formato de la aplicacion---------------------------- */
       /** Configuracion para Austar la Linea */
       if(texto=="Ajuste de Linea")
            {
           mEtiqueta.setLineWrap(true);
            }
       /** Configuracion para cambiar la Fuente*/
        else if(texto=="Fuente")
        {
             if(texto=="Peque�a")
                {
                mEtiqueta.setFont(fPeque);
                }
             if(texto=="Mediana")
                {
                mEtiqueta.setFont(fMedi);
                }
            if(texto=="Grande")
                {
                mEtiqueta.setFont(fGran);              
                }
            
       }
/** ---------------------------Eventos para el Menu-Formato de la aplicacion---------------------------- */
       /** Configuracion para la Barra de Estado */
       if(texto=="Barra de Estado")
            {
           mBarraEstado.setVisible(true);
           String strCad=mEtiqueta.getText();
           strCad="Linea: " + mEtiqueta.getText() + " | " + "Columna: " + mEtiqueta.getText();
           mBarraEstado.setText(strCad);
            }
    }
   }
}

