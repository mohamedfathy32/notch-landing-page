import { useState } from 'react';
import { Drawer, IconButton, List, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Notch from '../assets/Notch.webp';
const navLinks = [
  { title: 'Home', path: '#' },
  { title: 'Services', path: '#services' },
  // { title: 'Work', path: '#work' },
  { title: 'Team', path: '#team' },
  { title: 'Vision', path: '#vision' },
  { title: 'Contact', path: '#contact' }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List className="p-4 w-64">
      {navLinks.map((link) => (
        <a
          key={link.title}
          href={link.path}
          onClick={() => handleDrawerToggle()}
          className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors no-underline text-gray-700"
        >
          <ListItemText primary={link.title} />
        </a>
      ))}
    </List>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={Notch} alt="Notch Logo" className=" w-auto h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium no-underline"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a
              href="#contact"
              className="hidden md:inline-flex px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium no-underline"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden block">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
};

export default Header; 