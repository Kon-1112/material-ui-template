import React from "react";
import {Box, Divider, List, ListItem, ListItemButton, Typography} from "@mui/material";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import {WIDTH} from "../Config";
import { Link } from "react-router-dom";

export type EditListProps = {
  items: EditItemProps[];
}

export type EditItemProps = {
  id: string;
  title: string;
  editValues: string[];
  navigateTo?: string;
  onClick: () => void;
}

export const EditList: React.FC<EditListProps> = React.memo((props: EditListProps) => {
  return (
    <List sx={{ width: '100%', maxWidth: WIDTH, mb: -1 }}>
        {
          props.items.map((item: EditItemProps, index: number) => {
            return (
              <React.Fragment>
                <Divider />
                <ListItem
                  key={index}
                  sx={{ width: '100%', maxWidth: WIDTH }}
                  disablePadding
                >
                  <ListItemButton>
                    {item.navigateTo ? (
                      <Link to={item.navigateTo} style={{ width: '100%', textDecoration: 'none' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            minHeight: 35,
                            alignItems: 'center',
                          }}
                        >
                          <Box width='30%'>
                            <Typography variant="body2" align="left">
                              {item.title}
                            </Typography>
                          </Box>
                          <Box width='100%'>
                            <Typography variant="h6" align="left" sx={{ mx: 1.5 }}>
                              {
                                item.editValues.map((value: string, index: number) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {value}
                                      <br />
                                    </React.Fragment>
                                  )
                                }
                              )}
                            </Typography>
                          </Box>
                          <Box>
                            <ChevronRightRoundedIcon sx={{ width: 35, height: 35 }} />
                          </Box>
                        </Box>
                      </Link>
                    ) : (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          minHeight: 35,
                          alignItems: 'center',
                        }}
                        onClick={item.onClick}
                      >
                        <Box width='30%'>
                          <Typography variant="body2" align="left">
                            {item.title}
                          </Typography>
                        </Box>
                        <Box width='100%'>
                          <Typography variant="h6" align="left" sx={{ mx: 1.5 }}>
                            {
                              item.editValues.map((value: string, index: number) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {value}
                                      <br />
                                    </React.Fragment>
                                  )
                                }
                            )}
                          </Typography>
                        </Box>
                        <Box>
                          <ChevronRightRoundedIcon sx={{ width: 35, height: 35 }} />
                        </Box>
                      </Box>
                    )}
                  </ListItemButton>
                </ListItem>
              </React.Fragment>
            )
          })
        }
      </List>
  )
});