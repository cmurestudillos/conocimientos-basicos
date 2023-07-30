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
import java.awt.event.MouseEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JColorChooser;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JTextPane;
import javax.swing.SwingConstants;
import javax.swing.border.EmptyBorder;
import javax.swing.event.MouseInputAdapter;
/*
 * ventana.java
 *
 * Created on 7 de mayo de 2008, 9:13
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

/**
 *
 * @author Carlos
 */
public class ventana extends JFrame
{
    JMenuBar mBarra;
    JMenu mMenu[],mEditar,mHerramientas;
    JMenuItem mArchivo[],mEdicion[],mFormato[],mAyuda[];
    JTextPane mEtiqueta;
    JLabel mFirma,mCabecera,mTitulo;
    JPanel panelPie,panelMenu,panelEncabezado;
    JScrollPane srcScroll;
    JSplitPane splSplit;
    ImageIcon icon1,icon2,icon3,icon4,icon5,icon6;
    ImageIcon icon11,icon22,icon33,icon44,icon55,icon66,icon77;
    ImageIcon iconFuente;
    ImageIcon iconAyuda,iconAyuda2;
    ImageIcon Image[];
    ImageIcon IImage[];
    ImageIcon ImageFuente[];
    ImageIcon ImageAyuda[];
    
    /** Creates a new instance of ventana */
    public ventana()
    {
        Font fPie=new Font("Verdana",Font.BOLD,8);
        Font fNormal=new Font("Verdana",Font.BOLD,12);
        Font fTitulo=new Font("Verdana",Font.BOLD,20);
        
        /** Creacion y configuracion del menu */
        JMenuBar mBarra = new JMenuBar();
        setJMenuBar(mBarra);
        
        /** Oyentes para eventos de los Menus y submenus. */
        cerrar Killclosing=new cerrar();
        
        /** Creacion y configuracion etiquetas. */
        mFirma=new JLabel(" Aplicacion desarrollada en Java ");
        mFirma.setFont(fPie);
        mFirma.setOpaque(true);
        mFirma.setForeground(Color.RED);
        mTitulo=new JLabel(" --- Practica de Menus --- ");
        mTitulo.setFont(fTitulo);
        mTitulo.setOpaque(true);
        mTitulo.setForeground(Color.BLACK);
        
        /** Creacion y Configuracion del TextPane. */ 
        mEtiqueta=new JTextPane();
        mEtiqueta.setOpaque(true);
        mEtiqueta.setForeground(Color.BLACK);
        mEtiqueta.setBorder(BorderFactory.createTitledBorder(" Visor "));
        
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
        //panelEncabezado.add(mTitulo);
        panelMenu=new JPanel();
        panelMenu.setLayout(new GridLayout(1,2));
        panelMenu.setOpaque(true);
        panelMenu.add(splSplit);
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.RIGHT));
        panelPie.setOpaque(true);
        panelPie.add(mFirma);
        
        //Creacion de los Menus.
        JMenu mMenu[]=new JMenu[4];
        String Titulo[]={"Archivo","Edicion","Formato","Ayuda"};
        for(int i=0;i<mMenu.length;i++)
        {
            mMenu[i]=new JMenu(Titulo[i]);
            mMenu[i].setFont(fNormal);
            mBarra.add(mMenu[i]);
        }
        
        //Creacion de los SubMenus Archivos.
        JMenuItem mArchivo[]=new JMenuItem[6];
        String subTitulo[]={"Nuevo","Abrir","Guardar","Configurar Pagina","Imprimir","Salir"};
        //Creacion de las imagenes para los subMenus.
        ImageIcon icon1=new ImageIcon(getClass().getResource("/nuevo.png"));
        ImageIcon icon2=new ImageIcon(getClass().getResource("/abrir.png"));
        ImageIcon icon3=new ImageIcon(getClass().getResource("/guardar.png"));
        ImageIcon icon4=new ImageIcon(getClass().getResource("/configurar.png"));
        ImageIcon icon5=new ImageIcon(getClass().getResource("/imprimir.png"));
        ImageIcon icon6=new ImageIcon(getClass().getResource("/salir.png"));
        ImageIcon Image[]={icon1,icon2,icon3,icon4,icon5,icon6};
        for(int j=0;j<mArchivo.length;j++)
        {
            mArchivo[j]=new JMenuItem(subTitulo[j]);
            mArchivo[j].setFont(fNormal);
            mArchivo[j].setIcon(Image[j]);
            mMenu[0].add(mArchivo[j],j);
            mArchivo[j].addActionListener(new cerrar());
        }
        
        //Creacion de los SubMenus Edicion.
        JMenuItem mEdicion[]=new JMenuItem[7];
        String subTitulo2[]={"Cortar","Copiar","Pegar","Suprimir","Buscar","Remplazar","Seleccionar"};
        //Creacion de las imagenes para los subMenus.
        ImageIcon icon11=new ImageIcon(getClass().getResource("/cortar.png"));
        ImageIcon icon22=new ImageIcon(getClass().getResource("/copy.png"));
        ImageIcon icon33=new ImageIcon(getClass().getResource("/pegar.png"));
        ImageIcon icon44=new ImageIcon(getClass().getResource("/suprimir.png"));
        ImageIcon icon55=new ImageIcon(getClass().getResource("/buscar.png"));
        ImageIcon icon66=new ImageIcon(getClass().getResource("/remplazar.png"));
        ImageIcon icon77=new ImageIcon(getClass().getResource("/seleccionar.png"));
        ImageIcon IImage[]={icon11,icon22,icon33,icon44,icon55,icon66,icon77};
        for(int k=0;k<mEdicion.length;k++)
        {
            mEdicion[k]=new JMenuItem(subTitulo2[k]);
            mEdicion[k].setFont(fNormal);
            mEdicion[k].setIcon(IImage[k]);
            mMenu[1].add(mEdicion[k],k);
        }
        
        //Creacion de los SubMenus Formato.
        JMenuItem mFormato[]=new JMenuItem[1];
        String subTitulo3[]={"Fuente"};
        //Creacion de las imagenes para los subMenus.
        ImageIcon iconFuente=new ImageIcon(getClass().getResource("/fuente.png"));
        ImageIcon ImageFuente[]={iconFuente};
        for(int l=0;l<mFormato.length;l++)
        {
            mFormato[l]=new JMenuItem(subTitulo3[l]);
            mFormato[l].setFont(fNormal);
            mFormato[l].setIcon(ImageFuente[l]);
            mMenu[2].add(mFormato[l],l);
        }
        
        //Creacion de los SubMenus Ayuda.
        JMenuItem mAyuda[]=new JMenuItem[2];
        String subTitulo5[]={"Temas de Ayuda", "Acerca de"};
        //Creacion de las imagenes para los subMenus.
        ImageIcon iconAyuda=new ImageIcon(getClass().getResource("/temas.png"));
        ImageIcon iconAyuda2=new ImageIcon(getClass().getResource("/acerca.png"));
        ImageIcon ImageAyuda[]={iconAyuda,iconAyuda2};
        for(int m=0;m<mAyuda.length;m++)
        {
            mAyuda[m]=new JMenuItem(subTitulo5[m]);
            mAyuda[m].setFont(fNormal);
            mAyuda[m].setIcon(ImageAyuda[m]);
            mMenu[3].add(mAyuda[m],m);
        }
        
        //jframe principal.
        add(panelEncabezado,BorderLayout.NORTH);
        add(panelMenu,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana). 
        setSize(800,600);
        setLocation(150,150);
        setTitle(" Aplicaicion Swing ");
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
        int close=JOptionPane.showConfirmDialog(null," ¿Desea cerrar la aplicacion? ","A.F.",0);
           //cierra la aplicacion.
        if(close==0)
            {
           System.exit(0);
            }
       }
    }
/**-------------------------------Clase para salir de la aplicacion-----------------------------------*/
class cerrar implements ActionListener
    {
       public void actionPerformed(ActionEvent e)
       {
       JMenuItem mAux=(JMenuItem)e.getSource();
       String texto=mAux.getText();
           //cierra la aplicacion.
        if(texto=="Salir")
            {
           System.exit(0);
            }
       /** Configuracion para abrir un nuevo archivo*/
        else if(texto=="Nuevo")
        {
           
        }
        /** Configuracion del boton para abrir Archivos */
       else if(texto=="Abrir")
        {
           JFileChooser mFile=new JFileChooser();
           int respuesta=mFile.showOpenDialog(ventana.this);
           mEtiqueta.setText(Integer.toString(respuesta));
                if(respuesta==JFileChooser.APPROVE_OPTION)
                {
               File mArchivo=mFile.getSelectedFile();
               /** Proceso de apertura de imagen en textpane. **/
               String nombre=mArchivo.getName();
               String ext=nombre.substring(nombre.length()-3,nombre.length());
               
               if(ext.compareTo("jpg")==0 || ext.compareTo("gif")==0 || ext.compareTo("png")==0)
                        {
                        ImageIcon imgAux=new ImageIcon(mArchivo.getPath());
                        mEtiqueta.setText("");
                        mEtiqueta.setCaretPosition(0);
                        mEtiqueta.insertIcon(imgAux);
                        }
               else
                    {
                        try
                        {
                        mEtiqueta.setPage("file:"+mArchivo.getPath());
                        }
                        catch (IOException ex)
                        {
                        ex.printStackTrace();
                        }
                    }
                }
            }
       }
    }
}
