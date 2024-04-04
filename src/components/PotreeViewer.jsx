import React, { useEffect, useRef } from 'react';

function PotreeViewer({ pointCloudPath }) {
  const potreeContainerRef = useRef(null);

  useEffect(() => {
    if (potreeContainerRef.current) {
      // Initialize Potree viewer here
      const viewer = new Potree.Viewer(potreeContainerRef.current);

      // Configuration
      viewer.setEDLEnabled(true);
      viewer.setFOV(60);
      viewer.setPointBudget(1_000_000);
      
      // Load the point cloud
      Potree.loadPointCloud(pointCloudPath, "PointCloud", e => {
        let pointcloud = e.pointcloud;
        viewer.scene.addPointCloud(pointcloud);
        viewer.fitToScreen();
      });
    }
  }, [pointCloudPath]); // Re-run effect if the point cloud path changes

  return <div ref={potreeContainerRef} style={{ width: '100%', height: '500px' }} />;
}

export default PotreeViewer;
